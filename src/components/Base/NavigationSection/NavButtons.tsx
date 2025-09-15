import Button from '../Button/Button';

function NavButtons({ active, click }: any) {
  return (
    <section
      style={{
        margin: '20px auto',
        width: '600px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Button
        isActive={active === 'projects'}
        onClick={() => click('projects')}
      >
        Mini projects
      </Button>
      <Button isActive={active === 'landing'} onClick={() => click('landing')}>
        Landing
      </Button>
      <Button isActive={active === 'effect'} onClick={() => click('effect')}>
        Effect
      </Button>
    </section>
  );
}

export default NavButtons;
