def maxProfitPotential(prices: list[float]) -> float:
    profit = 0
    minimum = prices[0] if len(prices) > 0 else None

    for i in range(1,len(prices)):
        # If current - minimum > profit: profit = current - minimum
        if prices[i] - minimum > profit:
            profit = prices[i] - minimum
        
        # If current < minimum: minimum = current
        if prices[i] < minimum:
            minimum = prices[i]

    return profit

print(maxProfitPotential([7,1,5,3,6,4]) == 5)
print(maxProfitPotential([7,6,4,3,1]) == 0)
print(maxProfitPotential([3,1,5]) == 4)
print(maxProfitPotential([1,2,3,5,6,7]) == 6)
print(maxProfitPotential([3,3,3,3,3,3]) == 0)
print(maxProfitPotential([0.55,1.23,3.53,1.75,5.16]) == 4.61)
print(maxProfitPotential([1,9]) == 8)
print(maxProfitPotential([8,2]) == 0)
print(maxProfitPotential([1]) == 0)
print(maxProfitPotential([]) == 0)
print(maxProfitPotential([2, 5, 7, 1, 3, 4, 5]) == 5) 