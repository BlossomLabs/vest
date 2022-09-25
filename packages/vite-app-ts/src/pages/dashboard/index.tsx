import { Wrapper } from './index.styled';
import { useEthersContext } from 'eth-hooks/context';
import MyUserStreams from '~~/components/my-user-streams.tsx';
import { PageTitle } from '~~/components/page-title';
import AllStreamsPack from '~~/components/all-streams-pack.tsx';
import { useAccount } from 'wagmi';

function Dashboard() {
  const ethersContext = useEthersContext();
  const { isConnected, address } = useAccount();

  return (
    <Wrapper>
      <PageTitle title="Dashboard" />

      <div className="mt-6 grid sm:grid-cols-2 gap-6">
        <div className="p-4 bg-white rounded-lg shadow-xl pointer-events-auto text-[0.8125rem] leading-5 shadow-black/5 hover:bg-slate-50 ring-1 ring-slate-700/10">
          <label className="text-base font-bold text-black">Balance</label>
          <div className="mt-4">
            <p className="text-4xl">$0</p>
          </div>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-xl pointer-events-auto text-[0.8125rem] leading-5 shadow-black/5 hover:bg-slate-50 ring-1 ring-slate-700/10">
          <label className="text-base font-bold text-black">My Active Streams</label>
          <div className="mt-4">
            {isConnected && address ? <MyUserStreams account={address} /> : 'Connect you wallet'}
          </div>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-xl pointer-events-auto text-[0.8125rem] leading-5 shadow-black/5 hover:bg-slate-50 ring-1 ring-slate-700/10">
          <label className="text-base font-bold text-black">Stream Pack</label>
          <div className="mt-4">{isConnected ? <AllStreamsPack /> : 'Connect you wallet'}</div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Dashboard;
