import { Participant } from "../../../interfaces/ExtraLife/Participant";
import { fetchParticipant } from "../../../services/apiExtraLife";
import { useQuery } from "@tanstack/react-query";

export interface ExtraLifeParticipantResponse
{
  isLoading: boolean,
  participant: Participant,
  error: Error | null,
  refetch: () => void
}

export const useGetParticipant = (): ExtraLifeParticipantResponse => {
  const {isLoading, data: participant = {}, error, refetch} = useQuery({queryKey: ["extraLifeParticipant"], queryFn: ()=> fetchParticipant()});
  return { isLoading, participant, error, refetch};
}