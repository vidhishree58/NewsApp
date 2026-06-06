import loading from '../loading.gif'

const Spinner = () => {
    return (
      <div 
        className="d-flex justify-content-center align-items-center"
        style={{ height: "70vh" }}
      >
        <img src={loading} alt="loading" />
      </div>
    )
}

export default Spinner