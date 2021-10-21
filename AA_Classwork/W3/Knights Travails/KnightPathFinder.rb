require_relative 'PolyTreeNode'
require 'byebug'

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
    return nil if valid_moves.nil?
    # p @considered_positions
    # @considered_positions += valid_moves
    valid_moves
  end

  def initialize(start_pos)
    @start_pos = start_pos
    @considered_positions = [start_pos]
    #board = Array.new(8) { Array.new(8, "_") }
    self.build_move_tree
  end

  def build_move_tree
    self.start_pos = PolyTreeNode.new(start_pos)
    queue = [root_node]

    until queue.empty?
      current = queue.shift 
      current_pos = current.start
      new_move_positions(current_pos).each do |next_pos|
        next_node = PolyTreeNode.new(next_pos)
        current_node.add_child(next_node)
        nodes << next_node
      end
    end
  end

  def new_move_positions(position)
    possible_moves = KnightPathFinder.valid_moves(position)
    possible_moves.select do |el|
       !@considered_positions.include?(el)
    end
    return nil if possible_moves.empty?
    @considered_positions += possible_moves
    possible_moves   
  end
       

end

test = KnightPathFinder.new([0,0])

p test.considered_positions