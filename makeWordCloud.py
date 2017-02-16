# -*- coding: utf-8 -*-
import pytagcloud
from pytagcloud import create_tag_image, create_html_data, make_tags,LAYOUT_HORIZONTAL, LAYOUTS
from konlpy.tag import Twitter
from collections import Counter

class MakeWordCloud:

    def __init__(self,data_list):
        self.category_list = data_list.keys()
        self.word_list = data_list
        self.nlp = Twitter()
        self.count = 0

    def make_Word_Cloud(self):
        for data in self.word_list:
            nouns = self.nlp.nouns(self.word_list.get(data))
            nouns = [x for x in nouns if len(x) != 1]
            count = Counter(nouns)
            tags = count.most_common(40)
            taglist = pytagcloud.make_tags(tags, minsize=15,maxsize=50)

            fileName = 'wordcloud' + str(self.count) +'.jpg'
            pytagcloud.create_tag_image(taglist, fileName, size=(600, 600), fontname='korean', rectangular=True)
            self.count += 1
