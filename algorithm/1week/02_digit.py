def solution(s):
    li = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    answer = 0
    temp = ''
    for i in s:
        if i.isdigit():
            answer = answer * 10 + int(i)
        else:
            temp += i
            if temp in li:
                answer = answer * 10 + li.index(temp)
                temp = ''
    return answer
