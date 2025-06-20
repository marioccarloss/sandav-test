import Button from '@/components/ui/button/button';
import { useWindowSize } from '@/hooks/use-window-size';
import { useTeamStore } from '@/store/team-store';
import { Link, useSearch } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import React from 'react';
import Confetti from 'react-confetti';
import styled from 'styled-components';
import BattleResultHeader from '../components/battle-result-header/battle-result-header';
import RoundDetail from '../components/round-detail/round-detail';
import { simulateBattle } from '../logic/combat-logic';

const ResultsWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const RoundsContainer = styled.div`
  margin-top: 3rem;
`;

const BattleResultsPage = () => {
    const { team1: team1Id, team2: team2Id } = useSearch({ from: '/battle/results' });
    const { teams } = useTeamStore();
    const { width, height } = useWindowSize();

    const team1 = teams.find(t => t.id === team1Id);
    const team2 = teams.find(t => t.id === team2Id);

    if (!team1 || !team2) {
        return <div>Error: No se pudieron cargar los equipos.</div>;
    }

    const battleResult = simulateBattle(team1, team2);
    const { rounds } = battleResult;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <ResultsWrapper>
            <Link to="/" style={{ textDecoration: 'none', marginBottom: '2rem', display: 'block' }}>
                <Button>&#8592; Volver al Inicio</Button>
            </Link>
            <Confetti width={width} height={height} recycle={false} />
            <motion.div initial="hidden" animate="visible" variants={containerVariants}>
                <motion.div variants={itemVariants}>
                    <BattleResultHeader result={battleResult} team1={team1} team2={team2} />
                </motion.div>

                <RoundsContainer>
                    <motion.h2 variants={itemVariants} style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        Detalles de la Batalla
                    </motion.h2>
                    {rounds.map((round, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <RoundDetail round={round} />
                        </motion.div>
                    ))}
                </RoundsContainer>
            </motion.div>
        </ResultsWrapper>
    );
};

export default BattleResultsPage;
