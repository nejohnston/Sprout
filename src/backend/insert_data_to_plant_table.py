import selenium.common.exceptions
from selenium import webdriver
from selenium.webdriver.chrome.webdriver import WebDriver
import psycopg2
import time
import os
from dotenv import load_dotenv


def database_url_list() -> None:
    """
    Create a list of urls where the data is located in and call the function named get_plant_info.

    :return: Nothing
    """
    url_list = []
    for pageNo in range(1, 1870):
        url = f"https://plantdatabase.kpu.ca/plant/plantDetail/{pageNo}"
        url_list.append(url)
    get_plant_info(url_list)


def get_plant_info(url_list: list) -> None:
    """
    Scrape the wanted data from the website using Chrome webdriver.

    :param url_list: a list of urls where the data is located in
    :return: Nothing
    """
    driver = webdriver.Chrome("./chromedriver.exe")
    number = 1
    for url in url_list:
        print(number)
        driver.get(url)
        time.sleep(2)
        dataset = []
        info_list = [['Scientific Name', 'Common Name', 'Family Name', 'Plant Type'],
                     ['Habit', 'Form', 'Texture', 'Height', 'Spread', 'Growth Rate', 'Origin',
                      'Hardiness Rating', 'Exposure', 'Soil/ Growing Medium', 'Water Use', 'Landscape Uses'],
                     ['Form', 'Arrangement', 'Texture/ Venation', 'Surfaces', 'Colour in Fall'],
                     ['Inflorescence Type', 'Flower Morphology', 'Colour (petals)', 'Flower Time at Peak'],
                     ['Fruit Type', 'Fruit Colour', 'Fruiting Time'],
                     ['Bark Morphology', 'Bark or Stem Colour', 'Organ Modifications'],
                     ['Propagation', 'Pest Susceptibility', 'Specific Pests']]
        try:
            get_info_from_website(dataset, driver, info_list)
            store_data_to_database(dataset)
        except IndexError:
            pass
        number += 1


def get_info_from_website(dataset: list, driver: WebDriver, info_list: list) -> None:
    """
    Get data from the website using css selector.

    :param dataset: an empty list where the scraped data will be stored into
    :param driver: a Chrome webdriver
    :param info_list: a list of keys that we want to get from the website
    :return: Nothing
    """
    index = 0
    for number in range(0, 13):
        data_list = {}
        if number % 2 == 0:
            get_data(data_list, dataset, driver, index, info_list, number)
            index += 1
        elif number == 1:
            get_image_info(dataset, driver)


def get_data(data_list: dict, dataset: list, driver: WebDriver, index: int, info_list: list, number: int) -> None:
    """
    Get the dedicated data from the website and store the data into a list.

    :param data_list: an empty dictionary
    :param dataset: an empty list where the scraped data will be stored into
    :param driver: a Chrome webdriver
    :param index: an integer that indicates an index of info_list
    :param info_list: a list of keys that we want to get from the website
    :param number: an integer that increments by 1 from 0 to 12 inclusive
    :return: Nothing
    """
    nth_table = driver.find_elements_by_css_selector("#results_table .pdetail")[number]
    plant_nth_info = nth_table.find_elements_by_css_selector('tr')
    for info in plant_nth_info:
        key_value = info.text.split(':')
        if len(key_value) >= 2:
            make_data_dict(data_list, key_value)
    keys_list = info_list[index]
    for info in keys_list:
        if info in list(data_list.keys()):
            value = data_list[info].strip()
        else:
            value = ""
        dataset.append(value)


def make_data_dict(data_list: dict, key_value: list) -> None:
    """
    Make a dictionary that contains data from the website.

    :param data_list: an empty dictionary
    :param key_value: a list of strings split from the original data
    :return: Nothing
    """
    key = key_value[0].strip()
    value = ':'.join(key_value[1:]).strip()
    data_list[key] = value


def get_image_info(dataset: list, driver: WebDriver) -> None:
    """
    Get a plant image url using css selector.

    :param dataset: a list of data that is scraped from the website
    :param driver: a Chrome webdriver
    :return: Nothing
    """
    try:
        img_table = driver.find_elements_by_css_selector("#results_table .pdetail")[1]
        img_table.find_element_by_css_selector('img')
        img_info = img_table.find_element_by_css_selector('img')
        plant_img_url = img_info.get_attribute('src').strip()
    except selenium.common.exceptions.NoSuchElementException:
        plant_img_url = None
    dataset.append(plant_img_url)


def store_data_to_database(dataset: list) -> None:
    """
    Preprocess data and store the data into a database management system.

    :param dataset: a list of data that is scraped from the website
    :return: Nothing
    """
    for index in range(len(dataset)):
        if dataset[index] == "" or dataset[index] == 'n/a':
            dataset[index] = None

    db_data = [dataset]
    connect_db(db_data)


def connect_db(db_data: list) -> None:
    """
    Connect with DBMS and store the data into the DBMS.

    :param db_data: a list of a list that contains data that is scraped from the website
    :return: Nothing
    """
    load_dotenv(verbose=True)
    DB_HOST = os.getenv('HOST')
    DB_USER = os.getenv('DB_USERNAME')     # Your username for DBMS here.
    DB_PASSWD = os.getenv('DB_PASSWORD')    # Your DBMS password here.
    DB_NAME = os.getenv('DATABASE_NAME')  # Your database name here.
    PORT_NUM = 5432   # Your port number for the database here.

    conn = psycopg2.connect(
        host=DB_HOST, port=PORT_NUM, user=DB_USER, password=DB_PASSWD, dbname=DB_NAME, sslmode='require')

    curs = conn.cursor()
    try:
        sql = """INSERT INTO PLANT(
        PLANT_SCIENTIFIC_NAME, PLANT_COMMON_NAME, PLANT_FAMILY_NAME, PLANT_TYPE, PLANT_IMG_URL, PLANT_HABIT,
        PLANT_FORM, PLANT_TEXTURE, PLANT_MATURE_HEIGHT, PLANT_MATURE_SPREAD, PLANT_GROWTH_RATE, PLANT_ORIGIN,
        PLANT_HARDINESS_RATING, PLANT_EXPOSURE, PLANT_SOIL, PLANT_WATER_USE, PLANT_LANDSCAPE_USES, PLANT_LEAF_FORM,
        PLANT_LEAF_ARRANGEMENT, PLANT_LEAF_TEXTURE, PLANT_LEAF_SURFACES, PLANT_LEAF_COLOR_IN_FALL, 
        PLANT_INFLORESCENCE_TYPE,PLANT_FLOWER_MORPHOLOGY, PLANT_FLOWER_COLOR, PLANT_FLOWER_TIME_AT_PEAK, 
        PLANT_FRUIT_TYPE, PLANT_FRUIT_COLOR, PLANT_FRUIT_TIME, PLANT_BARK_MORPHOLOGY, PLANT_BARK_COLOR, 
        PLANT_ORGAN_MODIFICATIONS, PLANT_PROPAGATION, PLANT_PEST_SUSCEPTIBILITY, PLANT_SPECIFIC_PESTS)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s,
        %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"""

        curs.executemany(sql, db_data)

        conn.commit()

        conn.close()

    except Exception as error:
        print(error)


def main():
    database_url_list()


if __name__ == '__main__':
    main()
