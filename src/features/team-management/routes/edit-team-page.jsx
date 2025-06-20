import { editTeamRoute } from '@/app/router';
import { useParams } from '@tanstack/react-router';

import TeamBuilder from '../components/team-builder/team-builder';

const EditTeamPage = () => {
  const { teamId } = useParams({ from: editTeamRoute.id });
  return <TeamBuilder isEditMode={true} teamId={teamId} />;
};

export default EditTeamPage;
