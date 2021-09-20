require_relative 'PolyTreeNode'

class KnightPathFinder

    def initialize(start_pos)
        @start_pos = start_pos
        @board = Array.new(8) { Array.new(8, "_") }
        @root_node = PolyTreeNode.new(start_pos)
        self.build_move_tree 
    end

    def build_move_tree
        moves = [[1, 2],[1, -2],[-1, 2],[-1, -2],[2, 1],[2, - 1],[-2, -1],[-2, 1]]
        moves.each do |move|
            new_pos = []
            move.each_with_index { |el, i| new_pos << el + @start_pos[i]}
            @root_node.children << new_pos if new_pos.none? { |ele| ele > 7 || ele < 0 }
        end
    end

        #add all possible movement(children)
        #if else logic to make sure its a valid move (on the board)
        #if it is, we add to children 
       
       

end


    


