require_relative 'PolyTreeNode'

class KnightPathFinder

  attr_reader :considered_positions, :board, :start_pos, :root_node

  def self.valid_moves(pos)
    valid_moves = []
    moves = [[1, 2],[1, -2],[-1, 2],[-1, -2],[2, 1],[2, - 1],[-2, -1],[-2, 1]]
    moves.each do |move| 
      new_pos = [move[0] + pos[0], move[1] + pos[1]]
      if new_pos.none? { |ele| ele > 7 || ele < 0 }
        valid_moves << new_pos 
      end
    end
    valid_moves
  end

  def initialize(start_pos)
      @start_pos = start_pos
      @considered_positions = [start_pos]
      #board = Array.new(8) { Array.new(8, "_") }
      self.build_move_tree 
  end

  def build_move_tree 
    queue = [self]
    until queue.empty?
        current = queue.shift 
        current.new_move_positions.each do |position|
            new_inst = KnightPathFinder.new(position) 
            queue.push(new_inst)
        end
    end
    @considered_positions
  end


  def new_move_positions
    possible_moves = KnightPathFinder.valid_moves(self.start_pos).select {|el| !@considered_positions.include?(el)}
    @considered_positions += possible_moves
    possible_moves   
  end

   
       
       

end


    


