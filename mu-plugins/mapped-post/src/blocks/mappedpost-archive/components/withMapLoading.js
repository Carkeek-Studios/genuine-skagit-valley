function WithMapLoading(Component) {
      if (!isMapLoading && !isCatLoading) return <Component {...props} />;
      return (
        <p style={{ textAlign: 'center', fontSize: '30px' }}>
          Hold on, fetching data may take some time :)
        </p>
      );
    };

  export default WithMapLoading;