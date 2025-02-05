
 export function knightMoves(start, end){
    const directions = [[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[1,-2],[-1,2],[-1,-2]];

    function isValidMove(x, y){
        return x >= 0 && x < 8 && y >= 0 && y < 8;
    }

    let queue = [[start,[start]]];
    let visited = new Set();
    visited.add(start.toString());

    while (queue.length > 0){
        let [[x,y],path] = queue.shift();

        if(x === end[0] && y === end[1]){
            return path;
        }

        for (let [dx,dy] of directions){
            let newX = x + dx;
            let newY = y + dy;
            let newPos = [newX, newY];
            
            if(isValidMove(newX, newY) && !visited.has(newPos.toString())){
                visited.add(newPos.toString());
                queue.push([newPos, [...path, newPos]]);
            }
        }

    }
}

