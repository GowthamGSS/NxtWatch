import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'

const apiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}
class Home extends Component {
  state = {
    status: apiStatus.initial,
    loadedVideos: [],
    searchInput: '',
    bannerDisplay: 'flex',
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    const {searchInput} = this.state
    this.setState({status: apiStatus.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    // console.log(jwtToken)

    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const formattedData = await response.json()

    if (response.ok === true) {
      const updatedData = formattedData.videos.map(ele => ({
        id: ele.id,
        title: ele.title,
        thumbnailUrl: ele.thumbnail_url,
        channelName: ele.channel.name,
        channelProfileImageUrl: ele.channel.profile_image_url,
        viewCount: ele.view_count,
        publishedAt: ele.published_at,
      }))
      this.setState({status: apiStatus.success, loadedVideos: updatedData})
    } else {
      this.setState({status: apiStatus.failure})
    }
  }

  render() {
    const {loadedVideos} = this.state
    return (
      <div>
        <Header />
        {console.log(loadedVideos)}
      </div>
    )
  }
}
export default Home
