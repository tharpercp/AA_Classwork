require_relative 'PolyTreeNode'

class KnightPathFinder

  attr_reader :considered_positions, :board, :start_pos, :root_node

  def self.valid_moves(position)
    valid_moves = []
    moves = [[1, 2],[1, -2],[-1, 2],[-1, -2],[2, 1],[2, - 1],[-2, -1],[-2, 1]]
    moves.each do |move| 
      new_pos = []
      move.each_with_index { |el, i| new_pos << el + position[i]}
      if new_pos.none? { |ele| ele > 7 || ele < 0 }
        valid_moves << new_pos 
      end
    end
    valid_moves
  end

  def initialize(start_pos)
      @start_pos = start_pos
      @considered_positions = [start_pos]
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

  def new_move_positions(position)
    possible_moves = KnightPathFinder.valid_moves(position).select {|el| !@considered_positions.include?(el)}
    @considered_positions += possible_moves
    possible_moves    
  end

   
       
       

end


    


