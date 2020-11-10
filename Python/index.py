import requests

username = "ddt"
mu_type = 1

url = "http://localhost:8080/diary/" + username + "/" + str(mu_type)
r = requests.post(url)

print(r.status_code)
print(r.json())