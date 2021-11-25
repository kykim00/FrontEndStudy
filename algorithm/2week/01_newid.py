import re

def solution(new_id):
    new_id = new_id.lower()
    # 소문자, -, ., _, 숫자 아닌 것 제외
    new_id = re.sub(r'[^a-z\-\.\_\d]','',new_id)
    # . 2개 이상 반복 되는 것 . 으로 변경
    new_id = re.sub(r'\.\.+', '.', new_id)
    # 시작 문자가 . 이면 제외
    new_id = re.sub(r'^\.','', new_id)
    # 끝 문자가 . 이면 제외
    new_id = re.sub(r'\.$', '', new_id)
    if len(new_id) == 0:
        new_id = 'a'
    new_id = new_id[0:15]
    new_id = re.sub(r'\.$', '', new_id)
    while len(new_id) < 3:
        new_id += new_id[-1]
    return new_id