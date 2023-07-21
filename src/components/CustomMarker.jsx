const HighlightBlurb = ({ name, x, y }) => {
    return (
        <div style={{ position: 'absolute', top: y, left: x, backgroundColor: 'white', color:'black', padding: '8px' }}>
        <p>{name}</p>
      </div>
    );
  };

  export default HighlightBlurb