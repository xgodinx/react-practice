import Button from '../Button/Button';

function NavButtons({ active, click }) {
  return (
    <section style={{ margin: '20px auto', width: '300px' }}>
      <Button
        isActive={active === 'projects'}
        onClick={() => click('projects')}
      >
        Mini projects
      </Button>
      <Button isActive={active === 'landing'} onClick={() => click('landing')}>
        Landing
      </Button>
    </section>
  );
}

export default NavButtons;
