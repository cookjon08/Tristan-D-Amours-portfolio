from bs4 import BeautifulSoup
import pip._vendor.requests 
import json

url = "https://thelinknewspaper.ca/author/tristan-damours"
file_name=url.rsplit('/',1)[1].rsplit('.')[0]
page = pip._vendor.requests.get(url)

soup = BeautifulSoup(page.text, 'html.parser')

for article in soup.find_all("li", "group"): 
    article = {
        "header": article.h3.get_text(),
        "byline": article.p.get_text(),
        "link": article.a["href"],
    }

    print(article)

    with open('TheLinkArticles.json', 'w'):
        json.dumps(article, indent=6)