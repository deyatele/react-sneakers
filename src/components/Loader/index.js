import style from './Loader.module.css';
import ContentLoader from 'react-content-loader'



export  function Loader() {
  return (
    <>
      <div className={style.spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export const MoopLoading = () => (
  <ContentLoader 
    speed={2}
    width={220}
    height={250}
    viewBox="0 0 150 200"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    
  >
    <rect x="0" y="0" rx="10" ry="10" width="150" height="100" /> 
    <rect x="0" y="145" rx="5" ry="5" width="93" height="15" /> 
    <rect x="0" y="170" rx="8" ry="8" width="80" height="24" /> 
    <rect x="1" y="115" rx="5" ry="5" width="150" height="15" /> 
    <rect x="118" y="162" rx="8" ry="8" width="32" height="32" />
  </ContentLoader>
)
