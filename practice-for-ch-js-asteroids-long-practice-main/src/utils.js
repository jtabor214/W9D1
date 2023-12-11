const Util = {

    dist(point1, point2){
        return Math.sqrt(
            Math.pow(point1[0] - point2[0], 2) + Math.pow(point1[1] - point2[1])
        );
    },

    norm(vector){
        return Util.dist([0, 0], vector);
    },

    
}