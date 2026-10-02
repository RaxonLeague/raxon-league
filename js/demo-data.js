const DEMO_PLAYERS = Array.from({ length: 64 }, (_, i) => ({
    id: `demo-${i + 1}`,
    nickname: `Jugador_Demo_${i + 1}`,
    is_demo: true
}));