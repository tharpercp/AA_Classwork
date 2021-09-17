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



end