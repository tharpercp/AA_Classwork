class PolyTreeNode

  attr_reader :parent, :children, :value

  def initialize(value)
    @value = value
    @parent = nil
    @children = []
  end

  def parent=(parent_node) 
    prev_parent = self.parent
    @parent = parent_node
    return nil if parent == nil
    if prev_parent == nil
      if !parent_node.children.include?(self)
        parent_node.children << self   
      end   
    else #current node has a previous parent
      prev_parent.children.delete(self)
      parent_node.children << self   
    end
  end

  def add_child(node)
    node.parent = self if node.parent.nil?
  end

  def remove_child(node)
    raise "Node is not a child" if node.parent == nil
    node.parent = nil
  end

  def dfs(value)
    return nil if self.nil?
    stack = [self]
    if self.value == value
      return self
    else
      self.children.first.dfs(value)
    end
  end


end