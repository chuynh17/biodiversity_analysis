// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

    // Create a variable that holds the samples array. 
    var sampleData = data.samples;
    // Create a variable that filters the samples for the object with the desired sample number.
    var buildingArray = sampleData.filter(sampleObj => sampleObj.id == sample);
    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var freq_data = data.metadata.filter(f => f.id.toString() === id)[0];
    // Create a variable that holds the first sample in the array.
    var results = buildingArray[0];

    // 2. Create a variable that holds the first sample in the metadata array.
    var freq_results = freq_data[0]; 

    // Create variables that hold the otu_ids, otu_labels, and sample_values.


    // 3. Create a variable that holds the washing frequency.
    washing_frequency = freq_results.wfreq;
  
    // Create the yticks for the bar chart.

    // Use Plotly to plot the bar data and layout.
    Plotly.newPlot();
    
    // Use Plotly to plot the bubble data and layout.
    Plotly.newPlot();
   
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = [
      {
        domain: { x: [0, 1], y: [0, 1] },
        value: washing_frequency,
        title: {text: `Belly Button Washing Frequency`},
        type: "indicator",
        
        mode: "gauge+number",
        gauge: { axis: { range: [null, 9] },
                 steps: [
                  {range: [0, 1], color: "red"},
                  {range: [1, 2], color: "red"},
                  {range: [2, 3], color: "orange"},
                  {range: [3, 4], color: "orange"},
                  {range: [4, 5], color: "yellow"},
                  {range: [5, 6], color: "yellow"},
                  {range: [6, 7], color: "light green"},
                  {range: [7, 8], color: "light green"},
                  {range: [8, 9], color: "green"}
                ]}
            
        }
    ];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { 
      width: 700, 
            height: 600, 
            margin: { t: 20, b: 40, l:100, r:100 }     
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("guage", gaugeData, gaugeLayout);
  });
}
