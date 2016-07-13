export default function fetchComponentData(dispatch, components, params) {

  const needs = components.reduce( (prev, current) => {
    return (current.needs || [])
      .concat((current.WrappedComponent ? current.WrappedComponent.needs : []) || [])
      .concat(prev);
    }, []);

    // Ensure no duplicates
    const uniqNeeds = [...new Set(needs)];

    const promises = uniqNeeds.map(need => dispatch(need(params)));
    return Promise.all(promises);
}
