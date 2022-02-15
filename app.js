let controller = new AbortController();

d3.selectAll('p').on('mouseenter', async function() {
  try {
    // initiate fetch with an AbortController signal
    const response = await fetch('https://swapi.dev/api/planets/1/', { signal: controller.signal });
    const planet = await response.json();

    // set title attribute
    d3.select(this).attr('title', planet.name);
  } catch (error) {
    // do nothing
  }
}).on('mouseleave', function() {
  // remove title attribute
  d3.select(this).attr('title', null);
  // invoke abort signal
  controller.abort();
  // reset AbortController
  controller = new AbortController();
});