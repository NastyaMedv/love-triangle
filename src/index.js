/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
    var tri = 0;
  
    for (var i=0; i<preferences.length; i++) {
        var first = i;
        var second = preferences[first]-1;
        var third = preferences[second]-1;
        if (preferences[third]==first+1) {
            tri++;
        }
    }
    var answer = Math.floor(tri/3);
    
    return answer;
};
