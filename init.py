# -*- coding: utf-8 -*-

from makeData import *
from makeWordCloud import *

def main():
    make_data = MakeData()
    category_list = make_data.get_Category_List()
    data_list = make_data.get_Data_From_Category(category_list)
    make_word_cloud = MakeWordCloud(data_list)
    make_word_cloud.make_Word_Cloud()

main()
