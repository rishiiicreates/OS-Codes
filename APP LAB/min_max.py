nums = [12, 43, 53, 54]
min_v = max_v = nums[0]

for n in nums:
    if n > max_v: max_v = n
    if n < min_v: min_v = n

print("Max:", max_v)
print("Min:", min_v)