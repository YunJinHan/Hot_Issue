# -*- coding: utf-8 -*-

import scrapy
import re
from news.items import NewsItem
from datetime import datetime

class NewsSpider(scrapy.Spider):

    name = "news"

    def start_requests(self):
        for i in range(0,8):
            yield scrapy.Request("http://news.naver.com/main/list.nhn?mode=LSD&mid=sec&sid1=10%d&listType=title" %i, self.parse_news)

    def parse_news(self,response):

        category = response.xpath('//*[@id="main_content"]/div[1]/h3/text()').extract()[0]

        for sel in response.xpath('//*[@id="main_content"]/div[2]/ul/li'):
            item = NewsItem()
            item['category'] = category
            item['title'] = sel.xpath('a/text()').extract()[0]
            yield item
