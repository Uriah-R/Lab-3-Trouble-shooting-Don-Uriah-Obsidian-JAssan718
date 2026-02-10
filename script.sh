#!/bin/bash
# Expected output: This script should accept an input number and compute its factorial, printing each step and the final result. It also demonstrates loops and conditional statements.

read -p "Enter a number: " number

factorial() {
    local n=$1
    local result=1
    if [ $n -lt 0 ]; then
        echo "Factorial is not defined for negative numbers"
        return 1
    fi
    for (( i=1; i<=n; i++ )); do
        result=$((result + i)) # logic error: should multiply instead of add
        echo "Step $i: $result"
    done
    echo $result
}

final=$(factorial $number)
echo "Factorial of $number is $final"

# Additional function with syntax error
sum_numbers() {
    local arr=("$@")
    local total=0
    for val in "${arr[@]}"; do
        total=$((total + val))
    done
    echo $total
# Missing closing brace intentionally

# Additional loops to increase line count and show casting and conditions
numbers=(1 2 3 4 5)
for num in "${numbers[@]}"; do
    if [ $((num % 2)) -eq 0 ]; then
        echo "$num is even"
    else
        echo "$num is odd"
    fi
done

# While loop with logic error
counter=3
while [ $counter -gt 0 ]; do
    echo "Counter: $counter"
    counter=$((counter + 1)) # logic error: increment instead of decrement
    if [ $counter -gt 10 ]; then
        break
    fi
done

# Function demonstrating conditions and syntax error
compare_values() {
    local a=$1
    local b=$2
    if [ $a -gt $b ]; then
        echo "$a is greater"
    elif [ $a -lt $b ]; then
        echo "$b is greater"
    else
        echo "They are equal"
    fi
    return 0
}

compare_values 5 3
compare_values 2 8

# For loop with syntax error
for ((i=0; i<5; i++)); do
    if (( i % 2 = 0 )); then # syntax error: assignment instead of equality test
        echo "$i is even"
    else
        echo "$i is odd"
    fi
done

# Another function with missing then
check_number() {
    local n=$1
    if [ $n -gt 10 ]
        echo "Number is greater than 10" # missing then leads to syntax error
    else
        echo "Number is 10 or less"
    fi
}

check_number 12

# Filler loops for line count
for word in hello world scripting examples; do
    echo "Word: $word"
done

for ((x=0; x<3; x++)); do
    for ((y=0; y<2; y++)); do
        echo "x=$x y=$y"
    done
done

# Intentional infinite loop with break condition
idx=0
while true; do
    echo "idx=$idx"
    idx=$((idx + 1))
    if [ $idx -ge 5 ]; then
        break
    fi
done

exit 0
