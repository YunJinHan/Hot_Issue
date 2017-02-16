# -*- coding: utf-8 -*-

import sys
import re
import MySQLdb

reload(sys)
sys.setdefaultencoding('utf-8')

class MakeData:

    def __init__(self):
        self.host = '127.0.0.1'
        self.user = 'root'
        self.password = '0000'
        self.db_name = 'news'
        self.connection = MySQLdb.connect(self.host, self.user, self.password, self.db_name, charset="utf8", use_unicode = True)
        self.cursor = self.connection.cursor()
        self.category_list = []

    def clean_text(self,text):
        cleaned_text = re.sub('[a-zA-Z]','',text)
        cleaned_text = re.sub('[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"“‘…’”]','',cleaned_text)
        return cleaned_text

    def isSpace(self,text):
        isSpace_text = re.sub(' ','',text)
        if len(isSpace_text) == 0 :
            return False
        return True

    def get_Category_List(self):
        self.cursor.execute("SELECT DISTINCT(category) FROM article")
        data_rows = self.cursor.fetchall()
        for data in data_rows:
            self.category_list.append(data[0])
        return self.category_list

    def get_Data_From_Category(self,category_list):
        data_list = {}
        if type(category_list) == list:
            for i in category_list:
                data = ''
                self.cursor.execute("SELECT title FROM article WHERE category = %s",[i])
                data_rows = self.cursor.fetchall()
                for tmp in data_rows:
                    text = ''.join(tmp[0])
                    text2 = self.clean_text(text);
                    if self.isSpace(text2):
                        data += text2
                data_list[i] = data
        self.connection.close()
        return data_list
