import './Work.scss';

const className = `Work`;

const videoArray = [
  'https://www.youtube.com/watch?v=ETpXvoWPRdI',
  'https://www.youtube.com/watch?v=4fU_rbwGpjQ',
  'https://www.youtube.com/watch?v=8T9q-e-LNaY',
  'https://www.youtube.com/watch?v=2mAarAMrcFI',
];

function Work() {
  return (
    <div className={className}>
      <ul className={`${className}__video-list`}>
        {videoArray.map((url) => (
          <li key={url}>
            <img className="thumbnail" src="https://img.youtube.com/vi/ETpXvoWPRdI/maxresdefault.jpg" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Work;
