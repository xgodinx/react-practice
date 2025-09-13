import Button from '../Button/Button';

function NavButtons({ active, click }) {
  return (
    <div style={{ margin: '20px auto', width: '300px' }}>
      <Button
        isActive={active === 'projects'}
        onClick={() => click('projects')}
      >
        Mini projects
      </Button>
      <Button isActive={active === 'landing'} onClick={() => click('landing')}>
        Landing
      </Button>
    </div>
  );
}

export default NavButtons;
