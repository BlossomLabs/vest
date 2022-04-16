import { memo } from "react";
import { Button, useTheme, TokenBadge } from "@1hive/1hive-ui";
import { dateFormat } from "../../helpers/date-utils";
import { useVestedTokens } from "../../hooks";
import { Wrapper, Section, SectionTitle, Empty } from "./index.styled";

import { vestedERC20S as mockData } from "../../mocks/vestedERC20S";
import ListItems from "../List";

const VestedList = ({ handleWrapVesting }) => {
  const { loading, error } = useVestedTokens();
  const theme = useTheme();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const data = mockData;

  return (
    <Section>
      <SectionTitle small>Vested list</SectionTitle>

      {data?.vestedERC20S.length > 0 ? (
        <Wrapper>
          {data.vestedERC20S.map((vestedERC20, index) => {
            const token = vestedERC20.underlying;
            const startDate = dateFormat(vestedERC20.startTimestamp);
            const endDate = dateFormat(vestedERC20.endTimestamp);

            return (
              <ListItems
                key={index}
                renderHeader={
                  <>
                    <div
                      css={`
                        color: ${theme.surfaceContentSecondary};
                      `}
                    >
                      <strong>Vested Token</strong>
                    </div>
                    <div>
                      <TokenBadge address={token.id} name={token.name} symbol={token.symbol} />
                    </div>
                  </>
                }
                renderContent={
                  <>
                    <div>Start Date: {startDate}</div>
                    <div>End Date: {endDate}</div>
                  </>
                }
                renderAction={<Button label="Wrap" onClick={handleWrapVesting} />}
              />
            );
          })}
        </Wrapper>
      ) : (
        <Empty text="No vested token created" />
      )}
    </Section>
  );
};

export default memo(VestedList);
