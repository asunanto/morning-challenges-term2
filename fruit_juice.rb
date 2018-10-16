# In this challenge we mix some tasty fruit juice.
# We can add some components with certain amounts.
# Sometimes we pour out a bit of our juice. 
# Then we want to find out, which concentrations our fruit juice has.
# The jug has a limited capacity, set at time of creation. It should not be possible
# to add more juice to the jug than it's capacity.

# Example:

# You take an empty jug for your juice, which has a maximum capacity
# Whenever the jug is empty, the concentrations are always 0
# Now you add 200 ml of apple juice
# And then you add 200 ml of banana juice
# Now the concentration of apple juice is 0.5 (50%)
# Then you pour out 200 ml
# The concentration of apple juice is still 50%
# Then you add 200 ml of apple juice again
# Now the concentration of apple juice is 0.75, while the concentration of banana juice
# is only 0.25 (300 ml apple juice + 100 ml banana juice)

# Complete the functions in order to provide this functionality.

class Jug
    def initialize(capacity)
        @capacity = capacity
        @concentrations = {}
        @total_amount = 0
    end

    def add(amount, type)
        @total_amount += amount
        if @total_amount > @capacity
            amount = @capacity - (@total_amount-amount)
            @total_amount = @capacity
        end
        @concentrations.has_key?(type) ? @concentrations[type] += amount : @concentrations[type] = amount
    end

    def pour(amount)
        @concentrations.each { |key, val| @concentrations[key] *= (@total_amount - amount) / @total_amount.to_f } 
        @total_amount -= amount
    end

    def getTotalAmount
        @total_amount
    end

    def getConcentration(type)
        return 0 if @concentrations[type] == nil
        @concentrations[type]/@total_amount.to_f
    end
end
