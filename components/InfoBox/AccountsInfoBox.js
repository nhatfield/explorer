import InfoBox from './InfoBox'
import TabNavbar, { TabPane } from '../Nav/TabNavbar'

const AccountsInfoBox = () => {
  return (
    <InfoBox title="Overview">
      <TabNavbar>
        <TabPane title="Overview" key="overview">
          <div />
        </TabPane>
      </TabNavbar>
    </InfoBox>
  )
}

export default AccountsInfoBox