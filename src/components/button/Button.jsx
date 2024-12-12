import './button.css'

export default function Button({width, height, onClick, scrollTo}) {
    const handleClick = () => {
      if(scrollTo) {
        const target = document.getElementById(scrollTo);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }

      if(onClick) {
        onClick();
      }
    }

    return (
        <button 
        className="button"
        type="submit"
        style={{
            width: width,
            height: height,
        }} onClick={handleClick}>Оставить заявку</button>
    )
}