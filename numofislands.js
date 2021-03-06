var numIslands = function(grid) {
    if ( grid == null || grid.length ==0)
            return 0;
        var noOfIslands = 0;
        for(var i = 0; i < grid.length;i++) {
            
        for (var j = 0; j < grid[i].length; j++) {
            
              if (grid[i][j] == '1') {
                noOfIslands+= dfs(grid,i,j);
                }
                
             }
        }
        return noOfIslands;
    }
    
    const dfs = function( grid, i, j) {
        
        if (i < 0 || i >=grid.length || j <0 || j >=grid[i].length || grid[i][j] =='0')
            return 0;
        grid[i][j] ='0';
        
        dfs(grid, i + 1, j);
        dfs(grid, i - 1, j);
        dfs(grid, i , j + 1);
        dfs(grid, i , j - 1);
        
        return 1;
    }

    /*
    Runtime: 84 ms, faster than 73.68% of JavaScript online submissions for Number of Islands.
Memory Usage: 40.9 MB, less than 85.13% of JavaScript online submissions for Number of Islands.
*/
