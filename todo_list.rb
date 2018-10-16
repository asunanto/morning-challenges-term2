# For this challenge, your Todo List should be able to perform all actions
# given in the test. Namely you should be able to:
# 1. create a new todo list with a title and description
# 2. update the title or description
# 3. get a count of items in the list
# 4. check to see if all items in the list are marked done
# 5. mark all items in the list as done
# 6. add items to the list
# 7. mark a single item in the list as done
# 8. delete items from the list

# To accomplish this, you should define two classes - a TodoList class
# and a TodoListItem class.
class TodoList
    attr_accessor :title, :description
    def initialize(name)
        @title = name
        @items = []
        @description = ""
    end
    def delete_item(text)
        @items.delete_if {|item| item.text == text}
    end
    def add_item (text)
        item = TodoListItem.new(text)
        @items.push(item)
    end
    def count
        @items.count
    end
    def update_done(text)
        get_item(text).is_done = true
    end
    def get_item(text)
        @items.find {|item| item.text == text}
    end
    def all_done?
        @items.each {|item| return false if not item.done?}
            return true
    end
end

class TodoListItem
    attr_accessor :text, :is_done
    def initialize(text)
        @text = text
        @is_done = false
    end
    def done?
        @is_done
    end
end