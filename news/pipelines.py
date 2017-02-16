#!/usr/bin/python
# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: http://doc.scrapy.org/en/latest/topics/item-pipeline.html

import sys
import re
import MySQLdb
import hashlib
from scrapy.exceptions import DropItem
from scrapy.http import Request

reload(sys)
sys.setdefaultencoding('utf-8')

class NewsPipeline(object):

    host = '127.0.0.1'
    user = 'root'
    password = '0000'
    db = 'news'

    def __init__(self):
		self.connection = MySQLdb.connect(self.host, self.user, self.password, self.db, charset="utf8", use_unicode=True)
		self.cursor = self.connection.cursor()
		self.cursor.execute("DELETE FROM article")

    def clean_text(self,text):
        cleaned_text = re.sub('[a-zA-Z]','',text)
        cleaned_text = re.sub('[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"“‘…’”]','',cleaned_text)
        return cleaned_text

    def isSpace(self,text):
        isSpace_text = re.sub(' ','',text)
        if len(isSpace_text) == 0 :
            return True
        return False

    def process_item(self, item, spider):
        try:
            item['title'] = self.clean_text(item['title'])
            if self.isSpace(item['title']):
                return item
            self.cursor.execute("INSERT INTO article VALUES (%s, %s, %s)",(item['category'],item['title'],item['url']))
            self.connection.commit()
        except MySQLdb.Error, e:
            print "Error %d: %s" % (e.args[0], e.args[1])

        return item
