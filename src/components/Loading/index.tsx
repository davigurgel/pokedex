import loading from '../../assets/loading.gif'

const Loading = () => (
  <section>
    <div className="flex h-screen items-center justify-center">
      <img src={loading} className='w-32 h-32' alt="Loading" />
    </div>
  </section>
)

export default Loading
