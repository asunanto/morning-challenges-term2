class Array
  def square
    # create your square method here
    map{|x| x**2}
  end
  
  def cube
    map{|x| x**3}
  end
  
  def average
    sum/length
  end
  
  def even
    # select{|x| x if x.even?}
    select(&:even?)
  end
  
  def odd
    # select{|x| x if x.odd?}
    select(&:odd?)
  end
  
end

# now fill in the rest


