/** MainQuest logo using M.png */
function Logo({ size = 32, className = '' }) {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/M.png`}
      alt="MainQuest"
      width={size}
      height={size}
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}

export default Logo;
