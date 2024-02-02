function showVisualization(num) {
    // Hide the visualizations
    var visualizations = document.querySelectorAll('.visualization');
    visualizations.forEach(function(vis) {
        vis.classList.remove('active');
    });
    // Show the selected visualization
    var selectedVis = document.getElementById('visualization' + num);
    selectedVis.classList.add('active');
}
