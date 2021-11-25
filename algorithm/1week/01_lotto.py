def solution(lottos, win_nums):

    # lottos 요소 중 win_nums 에 없는 요소들을 list로 생성
    l_sub_w = [x for x in lottos if x not in win_nums]

    # 최저 순위
    if len(l_sub_w) >= 5:
        worst = 6
    else:
        worst = len(l_sub_w) + 1
    
    # 최고 순위
    best = worst    
    for i in l_sub_w:
        if i == 0 and best > 1:
            best = best - 1
    return [best, worst]