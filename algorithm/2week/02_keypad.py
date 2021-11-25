def solution(numbers, hand):
    # 1  2  3    계산이 쉽도록 변경   2  2  2
    # 4  5  6          - >           5  5  5   
    # 7  8  9          - >           8  8  8  
    # *  0  #                       11  11 11

    # 시작위치   
    left = ['L', 11]
    right = ['R', 11]
    answer = ''

    for num in numbers:
        # 0 을 11로 변경
        if num == 0:
            num = 11
        # 1, 4, 7 -> 2, 5, 8 로 LEFT에 저장
        if num == 1 or num == 4 or num == 7:
            answer += 'L'
            left = ['L', num + 1]
        # 3, 6, 9 -> 2, 5, 8 로 RIGHT에 저장
        elif num == 3 or num == 6 or num == 9:
            answer += 'R'
            right = ['R', num - 1]
        # 2, 5, 8 을 눌러야 하는 손가락의 인덱스[0]을 'M' 으로 변경
        # case 별로 나눔
        else:
            if left[0] == 'M' and right[0] != 'M':
                if abs(left[1] - num) - 3 == abs(right[1] - num):
                    if hand=="left":
                        answer += 'L'
                        left[1] = num
                    else:
                        answer += 'R'
                        right = ['M', num]
                elif abs(left[1] - num) - 3 > abs(right[1] - num):
                    answer += 'R'
                    right = ['M', num]
                else:
                    answer += 'L'
                    left[1] = num
            elif right[0] == 'M' and left[0] != 'M':
                if abs(right[1] - num) - 3 == abs(left[1] - num):
                    print(1, num, left)
                    if hand=="left":
                        answer += 'L'
                        left = ['M', num]
                    else:
                        answer += 'R'
                        right[1] = num
                elif abs(right[1] - num) - 3 > abs(left[1] - num):
                    print(2, num, left)
                    answer += 'L'
                    left = ['M', num]
                else:
                    print(3, num, left)
                    answer += 'R'
                    right[1] = num
            else:
                if abs(left[1] - num) ==  abs(right[1] - num):
                    if hand=="left":
                        answer += 'L'
                        left = ['M', num]
                    else:
                        answer += 'R'
                        right = ['M', num]
                elif abs(left[1] - num) >  abs(right[1] - num):
                    answer += 'R'
                    right = ['M', num]
                else:
                    answer += 'L'
                    left = ['M', num]
    return answer


# 작성하고 보니 너무.. 파이썬 같지 않다 ;;
# 잘 작성된 다른 사람의 코드

def solution2(numbers, hand):
    answer = ''
    key_dict = {1:(0,0),2:(0,1),3:(0,2),
                4:(1,0),5:(1,1),6:(1,2),
                7:(2,0),8:(2,1),9:(2,2),
                '*':(3,0),0:(3,1),'#':(3,2)}

    left = [1,4,7]
    right = [3,6,9]
    lhand = '*'
    rhand = '#'
    for i in numbers:
        if i in left:
            answer += 'L'
            lhand = i
        elif i in right:
            answer += 'R'
            rhand = i
        else:
            curPos = key_dict[i]
            lPos = key_dict[lhand]
            rPos = key_dict[rhand]
            ldist = abs(curPos[0]-lPos[0]) + abs(curPos[1]-lPos[1])
            rdist = abs(curPos[0]-rPos[0]) + abs(curPos[1]-rPos[1])

            if ldist < rdist:
                answer += 'L'
                lhand = i
            elif ldist > rdist:
                answer += 'R'
                rhand = i
            else:
                if hand == 'left':
                    answer += 'L'
                    lhand = i
                else:
                    answer += 'R'
                    rhand = i

    return answer