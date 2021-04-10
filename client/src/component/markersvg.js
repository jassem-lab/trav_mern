const Marker = () => {
  return (
    <>
      <svg
        viewBox='0 0 24 24'
        width='48'
        style={{
          width: '24px',
          height: '24px',
        }}
        height='48'
        stroke='currentColor'
        stroke-width='1.5'
        fill='none'
        stroke-linecap='round'
        stroke-linejoin='round'
        className='Marker'
      >
        <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'></path>
        <circle cx='12' cy='10' r='3'></circle>
      </svg>{' '}
    </>
  );
};
export default Marker;
