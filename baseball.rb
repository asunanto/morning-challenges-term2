# You have been hired to keep track of the score at baseball games.
# Unfortunately you tend to be rather absent minded because most nights,
# you stay up late playing video games and coding. Let's create a program
# that will keep track of the score for us.
#
# We'll need to create a constructor ScoreCard that has two public functions:
# addEntry and getScore.
#
# addEntry - Takes in the result of an at-bat. This result can be single,
# double, triple, homerun, or out.
#
# getScore - Returns the score in the format Home: [HOME_SCORE] Away: [AWAY_SCORE]
#
# To keep things simple, base runners will advance the amount of bases equal to that of
# the batter's hit (i.e. if the batter hits a double, each base-runner will advance two bases).
#
# A few important baseball rules:
#
# 1. The Away team bats first.
# 2. There are three outs in an inning.
# 3. After three outs the opposing team hits.
# 4. The hits single, double, triple and homerun correspond to the batter reaching bases first, second, third and home respectively.
# 5. Base runners start at home and then cycle through the bases first, second, third and home.
# 6. Runners score for their team after they reach home.
#
# For more information on baseball visit here: http://en.wikipedia.org/wiki/Baseball
#
class Baseball
    def initialize
        @score = [0, 0]
        @toggle = 1
        @outs_counter = 0
        @bases_loaded = []
    end    
    # A public method accepting the result of an at-bat
    # @param {string} entry - The result of an at-bat 
    # Acceptable values: ('single', 'double', 'triple', 'homerun' or 'out') 
    def addBase(value)
        for i in 0...@bases_loaded.length
            @bases_loaded[i] += value
            @score[@toggle] += 1 if @bases_loaded[i] >= 4     
        end
    
        @bases_loaded.delete_if { |x| x >= 4 }
        @bases_loaded << value
    end
    
    def addEntry(entry)
        case entry
        when 'single' 
            addBase(1)      
        when 'double'
            addBase(2)
        when 'triple'
            addBase(3)
        when 'homerun'
            @score[@toggle] += 1
            @score[@toggle] += @bases_loaded.length
            @bases_loaded = []
        when 'out'
            @outs_counter += 1
            if @outs_counter >= 3
                @bases_loaded = []
                @outs_counter = 0
                @toggle ^= 1
            end
        end
    end
    # A public method returning the current score
    # Format: "Home: [HOME_SCORE] Away: [AWAY_SCORE]"
    def to_s
        "Home: #{@score[0]} Away: #{@score[1]}"
    end
end


# baseball.addEntry('single')
# baseball.addEntry('single')
# baseball.addEntry('single')
# baseball.addEntry('single')
# puts baseball.bases_loaded


